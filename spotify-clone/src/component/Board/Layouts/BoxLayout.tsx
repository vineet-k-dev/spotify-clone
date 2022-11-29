import './style.css'

type BoxLayoutProps = {
    title : string
}

const data = [
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/arRehman.jpg",
        artist: "A.R. Rehman"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/arjit.jpg",
        artist: "Arjit Singh"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/justin.jpg",
        artist: "Justin Biber"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/alenWalker.jpg",
        artist: "Alen Walker"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/lataMangeskar.jpg",
        artist: "Lata Mangeskar"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/kishore.jpg",
        artist: "Kishore Kumar"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/siddhu.jpg",
        artist: "Siddhu Moosewala"
    },
    {
        description: "The biggest songs of the year 2022",
        image: "/assets/daljit.jpg",
        artist: "Daljit Dosanjh"
    },
]

const BoxLayout = ({title}: BoxLayoutProps) => {
  return (
    <div className="boxLayout">
        <div className="row-flex">
            <h3>{title}</h3>
            <h4>SEE ALL</h4>
        </div>
        <div className="row-flex row-scroll">
            {
                data.length > 0 ? data.map((item,index) => (
                    <div className='play-card' key={index}>
                        <div className='box-content pic'>
                            <img src={item.image} alt="song-pic"/>
                        </div>
                        <div className='box-content content'>
                            <h4>{item.artist}</h4>
                            <span>{item.description}</span>
                        </div>
                    </div>
                )) : null
            }
        </div>
    </div>
  )
}

export default BoxLayout