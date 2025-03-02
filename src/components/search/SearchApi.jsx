import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { client } from "../../../lib/axios";
// import { log } from "console";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const getApi = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await client.get("/api/user/searchUser", {
          search: searchTerm,
        });

        // console.log("Response:", response.data);
        setFilteredUsers(response.data.users || []);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("مشکلی در دریافت اطلاعات پیش آمد.");
      }
      setLoading(false);
    };

    if (searchTerm.trim() !== "") {
      const delayDebounceFn = setTimeout(() => {
        getApi();
      }, 500); // جلوگیری از درخواست‌های مکرر

      return () => clearTimeout(delayDebounceFn);
    } else {
      setFilteredUsers([]);
    }
  }, [searchTerm]);

  return (
    <section className="w-[400px] p-4 bg-white shadow-lg rounded-lg text-black">
      <h1 className="mb-4 text-2xl font-bold">جستجو</h1>
      <div className="relative">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="نام کاربر را جستجو کنید..."
          className="w-full p-2 pl-10 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        {searchTerm && (
          <X
            className="absolute right-3 top-3 cursor-pointer text-gray-500"
            size={20}
            onClick={() => setSearchTerm("")}
          />
        )}
      </div>

      <div className="mt-4">
        {loading && <p className="text-blue-500">در حال جستجو...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-2 border-b last:border-b-0"
            >
              <img
                src='../../../public/img/profile.png'
                alt={user.username}
                className="w-10 h-10 rounded-full"
              />
              {console.log(user)
              }
              <span className="text-lg font-medium text-black">{user.username}</span>
            </div>
          ))
        ) : (
          searchTerm &&
          !loading && <p className="text-gray-500 mt-2">کاربری یافت نشد</p>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
