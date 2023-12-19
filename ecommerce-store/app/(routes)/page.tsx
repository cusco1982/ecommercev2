import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

export const revalidate = 0;


const HomePage = async () => {

  const billboard = await getBillboard("a4269087-4e49-4f3a-8f35-5ac046e4e67a");

  return (
    <Container>
      <div className="space-y-10 pb-10">

        <Billboard data={billboard}/>

      </div>
    </Container>
  )
};

export default HomePage;