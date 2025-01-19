import Link from "next/link";

interface ActionLinkProps {
  name: string;
  href: string;
}

const ActionLink: React.FC<ActionLinkProps> = ({ name, href }) => {
  return (
    <div className="group8 flex flex-col gap-2 w-[104px] items-center text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl font-medium mt-5">
      <p>
        <Link href={href}>{name}</Link>
      </p>
      <hr className="w-full border-t-2 border-black mt-2" />
    </div>
  );
};

export default ActionLink;
