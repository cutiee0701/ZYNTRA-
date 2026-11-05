import React, { useState, useEffect, useRef } from 'react';
import { Search, X, TrendingUp, Clock, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { Product, Category } from '../types';
import { formatRupee } from '../lib/api';

interface SearchBarProps {
  products: Product[];
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onSearch: (query: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  products,
  categories,
  activeCategory,
  onSelectCategory,
  onSearch,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'Wireless ANC Headphones',
    'Titanium Smartwatch',
    'GaN Fast Charger',
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    'ANC Headphones',
    'Titan Ultra',
    'OLED Flagship',
    'Fast Charger 65W',
    'Espresso Maker',
    'Mechanical Keyboard',
  ];

  // Debounced search state
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query) {
      setDebouncedQuery('');
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setIsSearching(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  // Filter matching suggestions based on debounced input
  const trimmed = debouncedQuery.trim().toLowerCase();
  const filteredProducts = trimmed
    ? products
        .filter((p) => {
          return (
            p.name.toLowerCase().includes(trimmed) ||
            p.brand.toLowerCase().includes(trimmed) ||
            p.category.toLowerCase().includes(trimmed) ||
            p.description.toLowerCase().includes(trimmed)
          );
        })
        .slice(0, 6)
    : [];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      setSelectedIndex((prev) => (prev < filteredProducts.length - 1 ? prev + 1 : 0));
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredProducts.length - 1));
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && filteredProducts[selectedIndex]) {
        handleProductClick(filteredProducts[selectedIndex]);
      } else {
        handleExecuteSearch(query);
      }
    }
  };

  const handleExecuteSearch = (searchKeyword: string) => {
    if (!searchKeyword.trim()) return;
    const clean = searchKeyword.trim();
    onSearch(clean);
    setIsOpen(false);

    // Save to recents
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s.toLowerCase() !== clean.toLowerCase());
      return [clean, ...filtered].slice(0, 5);
    });
  };

  const handleProductClick = (product: Product) => {
    onSelectProduct(product);
    setIsOpen(false);
    setQuery(product.name);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedIndex(-1);
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative flex-1 max-w-2xl w-full">
      {/* Search Input Container */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleExecuteSearch(query);
        }}
        className="relative flex items-center"
      >
        <div className="relative w-full flex items-center border border-[#E6E6E6] rounded-2xl bg-[#F5F5F7] focus-within:bg-white focus-within:border-[#A20B1A] focus-within:ring-2 focus-within:ring-[#A20B1A]/10 transition-all overflow-hidden shadow-2xs">
          {/* Category Dropdown Selector */}
          <select
            value={activeCategory}
            onChange={(e) => {
              onSelectCategory(e.target.value);
            }}
            className="hidden sm:block py-2.5 pl-3 pr-2 text-xs font-semibold text-[#232429] bg-transparent border-r border-[#E6E6E6] outline-none cursor-pointer shrink-0"
            aria-label="Filter category"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Search Icon */}
          <Search className="w-4 h-4 text-[#777777] ml-3 shrink-0" />

          {/* Input field */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search products, brands and more..."
            className="w-full py-2.5 pl-2.5 pr-20 text-xs bg-transparent outline-none text-[#232429] placeholder:text-[#777777]"
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
          />

          {/* Search loading spinner */}
          {isSearching && (
            <div className="p-1 text-[#A20B1A] mr-1">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            </div>
          )}

          {/* Clear button when text present */}
          {!isSearching && query.trim().length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 text-[#777777] hover:text-[#232429] transition-colors cursor-pointer mr-1"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Primary Red Search Button */}
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#A20B1A] hover:bg-[#810916] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            aria-label="Submit search"
          >
            <Search className="w-4 h-4 text-white" />
          </button>
        </div>
      </form>

      {/* Suggestion Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E6E6E6] rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {/* Case 1: Typing with results */}
          {trimmed.length > 0 && filteredProducts.length > 0 && (
            <div>
              <div className="p-2.5 bg-[#F5F5F7] border-b border-[#E6E6E6] flex items-center justify-between text-[11px] text-[#777777] font-semibold">
                <span>Matching Products</span>
                <span>{filteredProducts.length} suggestions</span>
              </div>
              <div className="divide-y divide-[#E6E6E6] max-h-80 overflow-y-auto">
                {filteredProducts.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleProductClick(p)}
                    className={`w-full p-3 flex items-center gap-3 transition-colors text-left cursor-pointer ${
                      selectedIndex === idx ? 'bg-[#FEEEEF]/60' : 'hover:bg-zinc-50'
                    }`}
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 object-cover rounded-lg bg-[#F5F5F7] border border-[#E6E6E6] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#232429] truncate">{p.name}</p>
                      <p className="text-[11px] text-[#777777] capitalize">{p.brand} · {p.category}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-extrabold text-[#A20B1A] tabular-nums">
                        {formatRupee(p.pricePaise)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="p-2.5 bg-[#F5F5F7] text-center border-t border-[#E6E6E6]">
                <button
                  type="button"
                  onClick={() => handleExecuteSearch(query)}
                  className="text-xs font-bold text-[#A20B1A] hover:underline cursor-pointer flex items-center justify-center gap-1 mx-auto"
                >
                  <span>View all results for "{query}"</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Case 2: Typing but no results */}
          {trimmed.length > 0 && filteredProducts.length === 0 && (
            <div className="p-6 text-center space-y-2">
              <p className="text-xs font-bold text-[#232429]">No products match "{query}"</p>
              <p className="text-[11px] text-[#777777]">
                Try checking for typos or searching for a broader term like "headphones", "watch", or "phone".
              </p>
            </div>
          )}

          {/* Case 3: Empty query -> show Popular and Recent Searches */}
          {trimmed.length === 0 && (
            <div className="p-4 space-y-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#777777]" />
                    <span>Recent Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setQuery(term);
                          handleExecuteSearch(term);
                        }}
                        className="px-2.5 py-1 bg-[#F5F5F7] hover:bg-[#FEEEEF] hover:text-[#A20B1A] text-xs font-medium text-[#232429] rounded-lg transition-colors border border-[#E6E6E6] cursor-pointer"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#777777] uppercase tracking-wider mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#A20B1A]" />
                  <span>Popular Searches</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setQuery(term);
                        handleExecuteSearch(term);
                      }}
                      className="px-2.5 py-1 bg-white hover:bg-[#FEEEEF] hover:text-[#A20B1A] hover:border-[#A20B1A]/40 text-xs font-medium text-[#232429] rounded-lg transition-colors border border-[#E6E6E6] cursor-pointer shadow-2xs"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
