import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

const SearchableSelect = ({ options, value, onChange, placeholder, name, isStringArray = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
        if (!isOpen) {
            setSearchTerm('');
        }
    }, [isOpen]);

    const handleSelect = (option) => {
        const val = isStringArray ? option : option.code;
        onChange({ target: { name, value: val } });
        setIsOpen(false);
    };

    const filteredOptions = options.filter(option => {
        const text = isStringArray ? option : option.name;
        return text.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const getDisplayValue = () => {
        if (!value) return placeholder;
        if (isStringArray) return value;
        const selected = options.find(opt => opt.code === value);
        return selected ? selected.name : placeholder;
    };

    return (
        <div className="relative w-full" ref={wrapperRef}>
            <div
                className={`w-full p-2.5 border rounded-lg bg-gray-50 flex justify-between items-center cursor-pointer transition-all ${isOpen ? 'border-purple-500 bg-white ring-2 ring-purple-100' : 'border-gray-300 hover:border-purple-400 hover:bg-white'
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={!value ? "text-gray-400" : "text-gray-700"}>
                    {getDisplayValue()}
                </span>
                <ChevronDown size={20} className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            {isOpen && (
                <div className="absolute z-[60] w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden animate-fade-in">
                    <div className="p-2 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
                        <Search size={16} className="text-gray-400" />
                        <input
                            ref={inputRef}
                            type="text"
                            className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 p-1"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                        />
                        {searchTerm && (
                            <X
                                size={14}
                                className="text-gray-400 cursor-pointer hover:text-gray-600"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSearchTerm('');
                                }}
                            />
                        )}
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <div
                                    key={isStringArray ? option : (option.code || index)}
                                    className="p-3 hover:bg-purple-50 cursor-pointer text-gray-700 transition-colors border-b border-gray-50 last:border-none text-sm flex items-center justify-between"
                                    onClick={() => handleSelect(option)}
                                >
                                    <span>{isStringArray ? option : option.name}</span>
                                    {((isStringArray ? option : option.code) === value) && (
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="p-4 text-center text-gray-400 text-sm">
                                No results found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchableSelect;
