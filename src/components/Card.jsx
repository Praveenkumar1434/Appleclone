import Ai from '../assets/images/AI.png'
import chip from '../assets/images/chip.png'
import man from '../assets/images/man.png'
import dis from '../assets/images/display.png'

const disCards = [
    {
        note: "Apple Intelligence",
        point: "AI Opening Possibilities",
        image: Ai,
        bgColor: "bg-black",
        textColor: "text-white",
    },
    {
        note: "Silicon Chip",
        point: "Speed Unleashed",
        image: chip,
        bgColor: "bg-[#707070]",
        textColor: "text-blue-900",
    },
    {
        note: "Meet the Man",
        point: "Behind the Machine",
        image: man,
        bgColor: "bg-pink-100",
        textColor: "text-pink-900",
    },
    {
        note: "Display Brilliance",
        point: "Eyes Can't Resist",
        image: dis,
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
    },
];

function Card() {
    return (
        <>
            <div className="flex overflow-x-auto gap-6 px-4 py-6 scrollbar-hide">
                {disCards.map((disCard, index) => (
                    <div
                        key={index}
                        className="relative min-w-[250px] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0 h-[500px] rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
                    >
                        {/* Image covers entire card */}
                        <img
                            src={disCard.image}
                            alt={disCard.point}
                            className="w-full h-full object-cover"
                        />

                        {/* Text at top-left */}
                        <div className="absolute top-4 left-4 text-white">
                            <p className="text-xs font-semibold">{disCard.note}</p>
                            <h2 className="text-xl font-bold leading-tight">{disCard.point}</h2>
                        </div>
                    </div>
                ))}
            </div>




        </>
    )
}
export default Card;