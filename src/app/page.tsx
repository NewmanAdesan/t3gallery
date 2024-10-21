
const mockURLs = [
  "https://utfs.io/f/0AyQcrm5slVHeMtEUdy0uGcq72jHkJIVMOryn6pLi8YdQtbh",
  "https://utfs.io/f/0AyQcrm5slVHCdESORNom9taA5jDIp1nzLNXOvHxQTwk7dJu",
  "https://utfs.io/f/0AyQcrm5slVHo4ZD2fRMw92YuHSOIBfo8NpyjJnvX4GgAksa",
  "https://utfs.io/f/0AyQcrm5slVHSNxWLcwclrAUnVRv4iY28x1PIpdys9FHt3Zw",
  "https://utfs.io/f/0AyQcrm5slVHSzOdyJwclrAUnVRv4iY28x1PIpdys9FHt3Zw"
]

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2">
          {
              [...mockImages, ...mockImages, ...mockImages].map((image) => (
                <div key={image.id} className="w-48">
                    <img src={image.url} />
                </div>
              ))
          }
      </div>
      Hello (Gallery in Progres)
    </main>
  );
}
