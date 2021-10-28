import fetch from 'isomorphic-fetch';
import { toast } from 'react-toastify';

export const updateUser = (user,push) => {
    const token = window.localStorage.getItem("token");
    fetch("http://localhost:8080/api/1.0/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
        credentials: "include",
      })
        .then((r) => {
          if (r.ok) {
            toast.info("User properties updated");
            return r;
          }
          if (r.status === 401 || r.status === 403 || r.status === 500) {
            return Promise.reject(new Error("Bir hata oluştu"));
          }
          return Promise.reject(new Error("Bilinmeyen bir hata oluştu"));
        })
        .then(()=>{ 
            push("/pages/notes");
        })
        .catch((e) => {
          toast.error(e.message);
        });
}

export const deleteUser = (push) => {
    const token = window.localStorage.getItem("token");
    fetch("http://localhost:8080/api/1.0/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      })
        .then((r) => {
          if (r.ok) {
            toast.info("User deleted");
            return r;
          }
          if (r.status === 401 || r.status === 403 || r.status === 500) {
            return Promise.reject(new Error("Bir hata oluştu"));
          }
          return Promise.reject(new Error("Bilinmeyen bir hata oluştu"));
        })
        .then(()=>{ 
            push("/pages/register");
        })
        .catch((e) => {
          toast.error(e.message);
        });
}