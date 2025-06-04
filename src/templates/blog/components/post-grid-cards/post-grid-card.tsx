type PostGridCardProps = {
  children: React.ReactNode;
}

export function PostGridCard({children}: PostGridCardProps) {
  return (
    <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  )
}