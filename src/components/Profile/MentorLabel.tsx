interface Props {
  title: string;
  content:string;
  className?: string;
}

const MentorLabel = ({title, content, className}: Props) => {
  return (
    <div className={`w-[480px] h-10 flex items-center ${className}`}>
      <div className='w-32 ml-5 text-12 text-darkgray'>
        {title}
      </div>
      <div className='w-[332px] text-12 leading-20'>
        {content}
      </div>
    </div>
  )
}

export default MentorLabel