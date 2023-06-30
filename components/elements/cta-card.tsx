import Image from 'next/image';

const CTACard = () => {
  return (
    <div className="relative overflow-hidden rounded-md bg-slate-100 py-10 px-6">
      {/* overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
      {/* image */}
      <Image
        fill
        alt="CTA Card"
        className="object-cover object-center"
        src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
      />
      {/* content */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eaque corrupti deleniti dignissimos! Corrupti veritatis repellendus
          ducimus dolor quae doloribus officiis suscipit sed, ut est asperiores
          aliquam soluta vero repellat veniam pariatur!
        </p>
        {/* form */}
        <form className="flex items-center gap-2 mt-6 w-full">
          <input
            placeholder="write your email"
            className="bg-white/80 px-3 py-2 text-base rounded-md outline-none placeholder:text-sm focus:ring-2 ring-neutral-600 w-full md:w-auto"
          />
          <button className="px-3 py-2 rounded-md whitespace-nowrap bg-neutral-900 text-neutral-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
