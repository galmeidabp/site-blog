import Image from "next/image";

const customerStory = [
  {
    content: "A experiência de compra foi incrível! O atendimento foi rápido e eficiente, e o produto chegou antes do prazo. Estou muito satisfeito com a minha compra!",
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corporation",
      avatar: '/customer01.png'
    }
  },
  {
    content: "Eu estava cético no início, mas a qualidade do produto superou minhas expectativas. Definitivamente voltarei a comprar aqui!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: '/customer02.png'
    }
  }
]

export function StorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className="font-sans text-heading-xl text-gray-100">Quem utiliza, aprova!</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {customerStory.map((customerStory) => (
            <div key={customerStory.author.name} className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12">
              <p className="text-balance text-gray-200">{customerStory.content}</p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={customerStory.author.avatar} alt="Imagem de perfil" fill className="object-cover" />
                </div>

                <div className="flex flex-col">
                  <strong className="text-gray-200 text-sm">{customerStory.author.name}</strong>
                  <span className="text-xs text-gray-300">{customerStory.author.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}