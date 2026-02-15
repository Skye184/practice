
export interface ToDo{
  name:string,
  description:string,
  status:string,
  id:number;
  statusEvt?:(id: number, status: string)=>void
  remEvt?:(id: number)=>void
}