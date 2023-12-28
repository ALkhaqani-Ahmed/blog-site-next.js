import Image from "next/image";
import clasess from './post-header.module.css'
function PostHeader(props) {
  const { title, image } = props;
  return (
    <header className={clasess.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150}/>
    </header>
  );
}

export default PostHeader;
