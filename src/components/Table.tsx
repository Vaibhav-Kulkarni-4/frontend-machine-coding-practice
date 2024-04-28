import { useState, useEffect } from "react";
import { User } from "../interfaces/users";

function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // IIFE
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result: User[] = await response.json();
      if (result.length) {
        setIsLoading(false);
        setUsers(result);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="mt-10 flex justify-center items-center text-xl font-bold">
        Users table
      </h2>
      <div className="mt-6 flex justify-center items-center mb-10">
        {isLoading ? (
          <div className="text-lg font-bold">Loading</div>
        ) : (
          <table className="border-spacing-1 border-2 border-slate-500 border-separate">
            <caption className="caption-top mb-2">
              Table 1: Professional coders and their details.
            </caption>
            <thead>
              <tr>
                <th className="border-2 border-slate-600">S. No.</th>
                <th className="border-2 border-slate-600">Name</th>
                <th className="border-2 border-slate-600">Email</th>
                <th className="border-2 border-slate-600">Phone</th>
                <th className="border-2 border-slate-600">City</th>
                <th className="border-2 border-slate-600">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-3 border-2 border-slate-300">{user.id}</td>
                  <td className="px-3 border-2 border-slate-300">
                    {user.name}
                  </td>
                  <td className="px-3 border-2 border-slate-300">
                    {user.email}
                  </td>
                  <td className="px-3 border-2 border-slate-300">
                    {user.phone}
                  </td>
                  <td className="px-3 border-2 border-slate-300">
                    {user.address.city}
                  </td>
                  <td className="px-3 border-2 border-slate-300">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default UsersTable;
