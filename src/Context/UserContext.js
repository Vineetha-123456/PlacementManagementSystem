
import { createContext, useContext, useState ,useEffect} from "react";

export const userContext = createContext({
  userEmail: null,
  studentId:null,
  jobId:null,
  logIn: () => {},
  logOut: () => {},
  // apply: () => {},
  // update: ()=> {},
});

const USER = { userEmail: "Guest", isGuestUser: true };
// const JOB = {jobId:""};
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(()=>{
    const localdata=localStorage.getItem('user');
    return localdata?JSON.parse(localdata):USER;
  });
  const [job, setJob] = useState(
  );

  const [Student, setStudent] = useState(
    );

 
  
  
  function logIn(userEmail) {
    setUser({ isGuestUser: false, userEmail: userEmail });
 
  }
  function apply(jobId) {
    console.log(jobId);
    setJob({ jobId:jobId });
 
  }
  function update(studentId) {
    console.log(studentId);
    setStudent({ studentId:studentId });
 
  }
  useEffect(()=>{
    localStorage.setItem('jobs',JSON.stringify(job))
  },[job]
  )
  useEffect(()=>{
    localStorage.setItem('stud',JSON.stringify(Student))
  },[Student]
  )
 
  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(user))
  },[user]
  )
  function logOut() {
    setUser(USER);
  };
 
  return (
    <userContext.Provider value={{ user, job,Student, logIn, logOut ,apply,update }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user, job,Student,logIn, logOut ,apply,update} = useContext(userContext);

  return { user,job,Student, logIn, logOut,apply,update};
}