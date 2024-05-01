import Link from "next/link";
import { prisma } from "@/db";
import { ToDoItem } from "@/components/ToDoItem";

const getToDos= async ()=>{
 return prisma.toDo.findMany();
}

async function toggleToDo(id:string,complete:boolean){
  "use server"
  await prisma.toDo.update({where :{id},data:{complete}})
}


export default async function Home() {

const todos =await getToDos();



  return (
    <>
    <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">
    ToDos
    </h1>
    <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded
    hover:bg-slate-700 focus-within:bg-slate-700 outline-none" 
    href="/new"
    >New</Link>
    <label/>
    </header>
    <ul>{todos.map((todo)=>(
      <ToDoItem key={todo.id}{...todo} toggleToDo={toggleToDo} />
    ))}</ul>
    </>
  
  )
}
