import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { addPeople } from "@/app/features"
import { People as data } from "@/data/people"
import { columns } from "@/components/ui/people/columns"
import { DataTable } from "@/components/ui/people/data-table"


const Home = () => {

  const statePeople = useAppSelector(state => state.people);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPeople(data))
  }, [dispatch])


  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={statePeople} />
    </div>
  )
}

export default Home