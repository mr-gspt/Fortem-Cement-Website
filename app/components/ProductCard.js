import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import "boxicons/css/boxicons.min.css";

export function ProductCard({ image, title, description }) {
  return (
    <Card className="group flex h-full w-full flex-col overflow-hidden rounded-sm border border-[#eaaa00] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#eaaa00] hover:shadow-[0_25px_60px_rgba(233,155,99,0.25)]">
      <CardHeader
        shadow={false}
        floated={false}
        className="relative mx-5 mt-5 h-56 overflow-hidden rounded-sm bg-gray-100"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </CardHeader>

      <CardBody className="flex flex-1 flex-col gap-4 px-6 pb-6 text-left">
        <Typography
          variant="h5"
          className="font-display text-4xl font-bold uppercase tracking-wide text-[#eaaa00]"
        >
          {title}
        </Typography>
        <Typography
          variant="small"
          className="text-md leading-relaxed text-gray-600"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
