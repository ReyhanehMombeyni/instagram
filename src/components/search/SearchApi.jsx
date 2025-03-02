import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetch(`/api/user/searchUser?search=${searchTerm}&limit=5`)
        .then(response => response.json())
        .then(data => setFilteredUsers(data))
        .catch(error => console.error("Error fetching users:", error));
    } else {
      setFilteredUsers([]);
    }
  }, [searchTerm]);

  return (
    <section className="w-[400px] p-4 bg-white shadow-lg rounded-lg">
      <h1 className="mb-4 text-2xl font-bold">Search</h1>
      <div className="relative">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        {searchTerm && (
          <X className="absolute right-3 top-3 cursor-pointer text-gray-500" size={20} onClick={() => setSearchTerm("")} />
        )}
      </div>
      <div className="mt-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="flex items-center gap-3 p-2 border-b last:border-b-0">
              <img src={user.profile} alt={user.name} className="w-10 h-10 rounded-full" />
              <span className="text-lg font-medium">{user.name}</span>
            </div>
          ))
        ) : (
          searchTerm && <p className="text-gray-500 mt-2">No users found</p>
        )}
      </div>
    </section>
  );
}

export default SearchBar;