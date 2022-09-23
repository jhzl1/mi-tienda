import { MyFC } from "interfaces/MyFc"

export const PageContainer = ({ children }: MyFC) => {
  return (
    <div>
      <div className="bg-[#003890] h-52  md:h-64" />
      <div className="mx-2 lg:mx-12 bg-white -mt-20 rounded-3xl shadow-xl py-10">
        {children}
      </div>
    </div>
  )
}
