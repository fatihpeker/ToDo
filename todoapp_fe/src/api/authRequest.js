import fetch from 'isomorphic-fetch';
import { toast } from 'react-toastify';

export const singUp=(username,password,push)=>{
  fetch("http://localhost:8080/api/1.0/auth/signup",{
    method:"POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body: JSON.stringify({username,password})
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
    toast.success(`User added. You are being redirect to Login Page`);
    push("/pages/login");
  })
  .catch((e)=>{
    toast.error(e.message)
  });
}
export const login = (username,password,push) =>{
  fetch("http://localhost:8080/api/1.0/auth/signin",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({username,password})
    })
    .then((r)=>{
      if(r.ok){
        return r;
      }
      if(r.status===401||r.status===403||r.status===500){
        return Promise.reject(new Error("Bir hata oluştu"));
      }
      return Promise.reject(new Error("Bilinmeyen bir hata oluştu"));
    })
    .then((r)=>r.json())
    .then((response)=>{ 
      window.localStorage.setItem("token",response.token)
      window.localStorage.setItem("username",response.username)
      window.localStorage.setItem("userId",response.id)
      toast.success(`Welcome ${response.username}.`);

      
        push("/pages/notes");
      
      

    })
    .catch((e)=>{
      toast.error(e.message)
    });
    
}