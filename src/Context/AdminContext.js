import { createContext, useContext, useState ,useEffect} from "react";

export const adminContext = createContext({
  adminEmail: null,
  studentEmail:null,
  logIn: () => {},
  logOut: () => {},
  view: ()=>{}, 
});
const ADMIN = { adminEmail: "Guest", isGuestUser: true };

export function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(()=>{
    const localdata=localStorage.getItem('admin');
    return localdata?JSON.parse(localdata):ADMIN;
  }
  
  );

  const [Student, setStudent] = useState(
    );
  
  function logIn(adminEmail) {
    setAdmin({ isGuestUser: false, adminEmail: adminEmail });
 
  }
 
  useEffect(()=>{
    localStorage.setItem('admin',JSON.stringify(admin))
  },[admin]
  )
  function logOut() {
    setAdmin(ADMIN);
  };
  function view(studentEmail) {
    console.log(studentEmail);
    setStudent({ studentEmail:studentEmail });
  }

    useEffect(()=>{
      localStorage.setItem('stud',JSON.stringify(Student))
    },[Student]
    )
 
  return (
    <adminContext.Provider value={{ admin,Student, logIn, logOut,view }}>
      {children}
    </adminContext.Provider>
  );
}

export function useAdminContext() {
  const { admin,Student, logIn, logOut,view} = useContext(adminContext);

  return { admin, Student,logIn, logOut,view};
}