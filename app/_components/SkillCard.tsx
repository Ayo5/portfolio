interface SkillCardProps {
    title: string;
    SvgIcon: React.ReactNode;
    progress : number ;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, progress,  SvgIcon }) => {
    return (
        <div
            className="max-w-40 max-h-50 rounded-3xl border-2 border-white/10 overflow-hidden shadow-md hover:shadow-white/20 transition-shadow duration-300">
            <div className="flex justify-center py-2">
                <div className="w-12 h-12 mt-3">{SvgIcon}</div>
            </div>
            <div className="px-4 py-2 text-center">
                <h2 className="font-bold text-lg mb-2">{title}</h2>
            </div>
            <div className="px-4 py-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;