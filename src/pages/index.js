import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import useUser from "../lib/useUser";
import useData from "../lib/useData";

const Home = ({ Results }) => {
  const { BestSeller = [] } = Results;

  const { user } = useUser();
  console.log(user)

  const { data, isLoading } = useData();

  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/register">Sign UP</Link>
        <Link href="/signin">Sign In</Link>
      </nav>

      <section>
        <h2>Using Static Generation</h2>
        <div className="flex">
          {BestSeller.map((el) => (
            <div key={el.ID} className="item">
              <Image
                src={el.ImagePath}
                alt={el.DeepLinkPath}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>

      {user && (
        <>
          <h2>User Details</h2>
          <ul>
            <li>First Name: {user?.firstName}</li>
            <li>Last Name: {user?.lastName}</li>
            <li>Email: {user?.email}</li>
            <li>Mobile: ${user?.phone}</li>
          </ul>
        </>
      )}

      <section>
        <h2>Using Client Side</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {data?.Branches?.map((el) => (
              <li key={el.ID}>{el.Name}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.API_URL}/api/V5/Home/${process.env.LANG}/Retrieve/${process.env.COUNTRY}`
  );

  const { Results } = await res.json();

  return {
    props: { Results },
  };
};
