import { columns } from "@/components/ui/people/columns"
import { DataTable } from "@/components/ui/people/data-table"
import { People as data } from "@/data/people"

const Home = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Home