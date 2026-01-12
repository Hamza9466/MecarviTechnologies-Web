"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  email_verified_at: string | null;
  created_at?: string;
}

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      
      if (!token) {
        setError("Not authenticated. Please login again.");
        setLoading(false);
        return;
      }

      console.log("Fetching users from:", "http://localhost:8000/api/v1/users");

      const response = await fetch("http://localhost:8000/api/v1/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);
      console.log("Response data type:", typeof data.data);
      console.log("Response data keys:", data.data ? Object.keys(data.data) : "data is null/undefined");

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to fetch users");
      }

      // Handle different response formats
      let usersList: User[] = [];
      
      if (data.success && data.data) {
        // If data.data is an array, use it directly
        if (Array.isArray(data.data)) {
          usersList = data.data;
        }
        // If data.data is an object, check for users property
        else if (data.data.users && Array.isArray(data.data.users)) {
          usersList = data.data.users;
        }
        // If data.data is an object, check for data property
        else if (data.data.data && Array.isArray(data.data.data)) {
          usersList = data.data.data;
        }
        // Try to convert object to array if it's a collection
        else if (typeof data.data === 'object') {
          // Check if it's an object with numeric keys (like {0: {...}, 1: {...}})
          const keys = Object.keys(data.data);
          if (keys.length > 0 && keys.every(key => !isNaN(Number(key)))) {
            usersList = Object.values(data.data) as User[];
          }
        }
      } else if (Array.isArray(data.data)) {
        usersList = data.data;
      } else if (Array.isArray(data.users)) {
        usersList = data.users;
      } else if (Array.isArray(data)) {
        usersList = data;
      }
      
      console.log("Extracted users list:", usersList);
      setUsers(usersList);
      
      setError("");
    } catch (err: any) {
      console.error("Error fetching users:", err);
      const errorMessage = err.message || "Failed to load users. Please try again.";
      setError(errorMessage);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };


  const handleDeleteUser = async (userId: number) => {
    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Not authenticated. Please login again.");
        return;
      }

      console.log(`Deleting user ${userId} from: http://localhost:8000/api/v1/users/${userId}`);

      const response = await fetch(`http://localhost:8000/api/v1/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      console.log("Delete response status:", response.status);

      const data = await response.json();
      console.log("Delete API Response:", JSON.stringify(data, null, 2));

      if (!response.ok) {
        let errorMessage = "Failed to delete user";
        if (data.message) {
          errorMessage = data.message;
        } else if (data.error) {
          errorMessage = data.error;
        } else if (data.errors) {
          const errorMessages = Object.values(data.errors).flat() as string[];
          errorMessage = errorMessages.join(", ");
        }
        throw new Error(errorMessage);
      }

      // Show success message if available
      if (data.success || data.message) {
        console.log("User deleted successfully:", data.message || "Success");
      }

      // Refresh users list
      fetchUsers();
      
      // Clear any previous errors
      setError("");
    } catch (err: any) {
      console.error("Error deleting user:", err);
      setError(err.message || "Failed to delete user");
    }
  };


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Manage Users</h1>
        <button 
          onClick={() => router.push("/admin/users/edit/new")}
          className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Add New User
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
            <p className="mt-4 text-gray-600">Loading users...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.role === "admin"
                              ? "bg-purple-100 text-purple-800"
                              : user.role === "editor"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => router.push(`/admin/users/${user.id}`)}
                            className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors text-xs font-medium"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => router.push(`/admin/users/edit/${user.id}`)}
                            className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-md hover:bg-pink-100 transition-colors text-xs font-medium"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleDeleteUser(user.id)}
                            className="px-3 py-1.5 bg-red-50 text-red-700 rounded-md hover:bg-red-100 transition-colors text-xs font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}

