import Link from "next/link";
import { ur } from "zod/v4/locales";  

const mockUrls = [
  "https://prt25e8zgf.ufs.sh/f/qM4SByezm6aECr0wSoTV7uqxoflnhSvL8c6XPjBEkwYNdpb3",
  "https://prt25e8zgf.ufs.sh/f/qM4SByezm6aEdJnQpXGTLWM63ok29jpGHYgzvDfPbOinK1yw",
];

const mockImages =  mockUrls.map((url, index) => ({

id: index + 1,
url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages,...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
      Hello (gallery in progress 2)
    </main>
  );
}
