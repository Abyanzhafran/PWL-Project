import Image from 'next/image';
export default function Card({ head, cardImage, cardContent }) {
  return (
    <div className="card card-bordered bg-secondary-lighter text-primary max-w-min m-3">
      <figure className="">
        <Image
          layout="responsive"
          src={`https://picsum.photos/id/1005/200/200`}
          width={200}
          height={200}
        ></Image>
      </figure>
      <div className="card-body">
        <div className="card-title">{head}</div>
        <div className="flex justify-center items-end">{cardContent}</div>
      </div>
    </div>
  );
}
