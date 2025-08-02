const tableHeading=[{
        colName:"Avatar",
        icon:"👤"
    },
    {
        colName:"Name",
        icon:"📛"
    },
    {
        colName:"Status",
        icon:"✅"
    }
]
const tableData=[{
    avatar:"👤",
    name:"Alice",
    status:"Active",
},
{
    avatar:"👤",
    name:"Bob",
    status:"Inactive",
}
]
function TableContent(){
    
    return(
        <div className="container mx-auto w-[100%] max-w-lg p-6">
            <h2 className="text-2xl mb-4 font-bold">
                📊User data
            </h2>
            <table className=" min-w-full border border-collapse">
                <thead>
                    <tr>
                        {tableHeading.map((heading)=>(
                            <th key={heading.colName} className="border border-gray-300 px-4 py-2 bg-gray-400">
                                {heading.icon} {heading.colName}
                            </th>

                        )

                       ) }
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((user , index)=>(
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{user.avatar}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className={`border border-gray-300 px-4 py-2 ${user.status=="Active"?` text-green-600`:`text-red-600`}`}>{user.status}</td>

                        </tr>
                    )


                    )}
                </tbody>
            </table>
        </div>
    )
}
export default TableContent;