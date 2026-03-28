export const ResponsiveLogo = () => {
    return (
        <>
            <div className="hidden whitespace-nowrap md:block">
                <span className="font-extrabold text-lg">
                    에이치제이 이엔지
                </span>
                <span className="ml-1 text-sm text-[var(--gray-11)]">
                    (HJ ENG)
                </span>
            </div>

            <div className="block md:hidden">
                <span className="font-extrabold text-base">HJ ENG</span>
            </div>
        </>
    );
};
