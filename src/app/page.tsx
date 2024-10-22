import { db } from "~/server/db";
import { v4 as uuidv4 } from "uuid";

export const dynamic = "force-dynamic"

const mockURLs = [
  "https://utfs.io/f/0AyQcrm5slVHeMtEUdy0uGcq72jHkJIVMOryn6pLi8YdQtbh",
  "https://utfs.io/f/0AyQcrm5slVHCdESORNom9taA5jDIp1nzLNXOvHxQTwk7dJu",
  "https://utfs.io/f/0AyQcrm5slVHo4ZD2fRMw92YuHSOIBfo8NpyjJnvX4GgAksa",
  "https://utfs.io/f/0AyQcrm5slVHSNxWLcwclrAUnVRv4iY28x1PIpdys9FHt3Zw",
  "https://utfs.io/f/0AyQcrm5slVHSzOdyJwclrAUnVRv4iY28x1PIpdys9FHt3Zw"
]

const mockImages = mockURLs.map((url, index) => ({
  id: uuidv4(), // TODO: use uuid
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  // console.log(posts)  // this console.log would happen in the server

  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
          {
            posts.map((post) => (
              <div key={post.id} className="w-48">
                  {post.name}
              </div>
            ))
          }
          {
              [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                <div key={image.id + index} className="w-48">
                    <img src={image.url} />
                </div>
              ))
          }
      </div>
      Hello (Gallery in Progres)
    </main>
  );
}
