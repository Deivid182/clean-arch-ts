import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { addPeople } from "@/app/features"
import { People as data } from "@/data/people"
import { columns } from '@/pages/home/columns'
import { DataTable } from "@/components/ui/data-table"
import { SearchKey as SearchKeyType } from "@/models" 

const Home = () => {

  const [searchKey, setSearchKey] = useState<SearchKeyType>(SearchKeyType.NAME)
  const statePeople = useAppSelector(state => state.people);

  const dispatch = useAppDispatch();

  const onChangeSearchKey = (value: SearchKeyType) => {
    setSearchKey(value)
  }

  useEffect(() => {
    dispatch(addPeople(data))
  }, [dispatch])


  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={statePeople} searchKey={searchKey} onChangeSearchKey={onChangeSearchKey} />
    </div>
  )
}

export default Home