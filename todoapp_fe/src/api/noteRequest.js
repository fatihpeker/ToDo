import fetch from 'isomorphic-fetch';
import { toast } from 'react-toastify';

export const createNewNote=(note)=>{
  const token = window.localStorage.getItem("token");
  var url="";
  var method="";
  if(note.id===null){
    url="http://localhost:8080/api/1.0/note";
    method="POST";
  }else{
    url="http://localhost:8080/api/1.0/note/update";
    method="PUT";
  }
    fetch(url,{
      method:method,
      headers:{
        "Content-Type" : "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(note)
    })
    .then((r)=>{
      if(r.ok){
        return r;
      }
      if(r.status===401||r.status===403||r.status===500){
        return Promise.reject(new Error("Bir hata oluştu"));
      }
      return Promise.reject(new Error("Bilinmeyen bir hata oluştu"));
    }).then((r)=>{
      toast.success(`Note added. You are being redirect to Login Page`);
    })
    .catch((e)=>{
      toast.error(e.message)
    });
  }


  export const deleteNote = (id,callback) => {
    const token = window.localStorage.getItem("token");
    fetch("http://localhost:8080/api/1.0/note/delete?" + new URLSearchParams({ id: id }), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      })
        .then((r) => {
          if (r.ok) {
            toast.info("Note deleted");
            return r;
          }
          if (r.status === 401 || r.status === 403 || r.status === 500) {
            return Promise.reject(new Error("Bir hata oluştu"));
          }
          return Promise.reject(new Error("Bilinmeyen bir hata oluştu"));
        })
        .then(()=>{ 
          if(callback!==null){
            callback();
          }
        })
        .catch((e) => {
          toast.error(e.message);
        });
}