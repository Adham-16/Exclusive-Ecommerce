import React from 'react'

export function SectionTwo() {

    const stats = [
        {
            icon: <svg width="35" height="32" viewBox="0 0 35 32" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="white" stroke-width="2" />
                <path d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="#FAFAFA" stroke-width="2" />
                <path d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="#FAFAFA" stroke-width="2" />
                <path d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="#FAFAFA" stroke-width="2" />
                <path d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="#FAFAFA" stroke-width="2" />
                <path d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="#FAFAFA" stroke-width="2" stroke-miterlimit="16" />
            </svg>, number: '10.5k ', text: 'Sellers active our site'
        },
        {
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 8.18176V12.1212M20 27.8787V31.8181" stroke="black" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>, number: '33k', text: 'Monthly Product Sale'
        },
        {
            icon: <svg width="28" height="34" className='bg-black' viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.66699 8.66672V5.33339C5.66701 4.36818 5.9464 3.42362 6.47143 2.6137C6.99646 1.80379 7.74469 1.16315 8.6258 0.769121C9.50691 0.375089 10.4832 0.244506 11.4369 0.393135C12.3906 0.541764 13.2809 0.963251 14.0003 1.60672C14.7197 0.963251 15.61 0.541764 16.5637 0.393135C17.5174 0.244506 18.4937 0.375089 19.3748 0.769121C20.256 1.16315 21.0042 1.80379 21.5292 2.6137C22.0543 3.42362 22.3336 4.36818 22.3337 5.33339V8.66672H24.8337C25.4967 8.66672 26.1326 8.93011 26.6014 9.39895C27.0703 9.86779 27.3337 10.5037 27.3337 11.1667V27.8417C27.3337 29.3866 26.72 30.8682 25.6276 31.9606C24.5352 33.053 23.0535 33.6667 21.5087 33.6667H7.33366C5.56555 33.6667 3.86986 32.9643 2.61961 31.7141C1.36937 30.4639 0.666992 28.7682 0.666992 27.0001V11.1667C0.666992 10.5037 0.930384 9.86779 1.39922 9.39895C1.86807 8.93011 2.50395 8.66672 3.16699 8.66672H5.66699ZM16.7253 31.1667C16.0454 30.1914 15.6818 29.0306 15.6837 27.8417V11.1667H3.16699V27.0001C3.16699 27.5472 3.27477 28.089 3.48416 28.5946C3.69356 29.1001 4.00047 29.5594 4.38738 29.9463C4.77429 30.3332 5.23362 30.6402 5.73915 30.8496C6.24467 31.0589 6.78648 31.1667 7.33366 31.1667H16.7253ZM13.167 8.66672V5.33339C13.167 4.67035 12.9036 4.03446 12.4348 3.56562C11.9659 3.09678 11.33 2.83339 10.667 2.83339C10.004 2.83339 9.36807 3.09678 8.89923 3.56562C8.43038 4.03446 8.16699 4.67035 8.16699 5.33339V8.66672H13.167ZM15.667 8.66672H19.8337V5.33339C19.8337 4.81878 19.6749 4.31669 19.379 3.89566C19.0832 3.47463 18.6645 3.15517 18.1803 2.98089C17.6961 2.8066 17.1699 2.78599 16.6736 2.92186C16.1772 3.05773 15.7349 3.34346 15.407 3.74005C15.5753 4.24005 15.667 4.77672 15.667 5.33339V8.66672ZM18.1837 27.8417C18.1837 28.7236 18.534 29.5693 19.1575 30.1929C19.7811 30.8164 20.6268 31.1667 21.5087 31.1667C22.3905 31.1667 23.2362 30.8164 23.8598 30.1929C24.4833 29.5693 24.8337 28.7236 24.8337 27.8417V11.1667H18.1837V27.8417Z" fill="white" />
            </svg>, number: '45.5k', text: 'Customer active in our site'
        },
        {
            icon:
                <svg width="34" height="37" className='bg-black' viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.6767 4.76429L27.0916 5.61971L24.0755 10.0291L23.6628 9.74683L23.8302 10.218C19.5237 11.7487 14.442 11.7487 10.1363 10.2158L9.98224 10.161L9.89036 10.0257L7.93199 7.14221L7.18585 6.04359L8.47126 6.37733C9.0456 6.52645 9.62503 6.65522 10.2085 6.76338C12.5278 7.19114 14.992 7.28156 17.1845 6.64825L27.6767 4.76429ZM27.6767 4.76429L26.643 4.83872M27.6767 4.76429L26.643 4.83872M26.643 4.83872C23.7945 5.04381 20.4218 5.71099 17.1848 6.64817L26.643 4.83872ZM24.9832 10.8936L25.2138 11.1367C27.2982 13.334 29.0418 15.8309 30.3868 18.5446L30.3877 18.5465C31.7889 21.4048 32.5736 24.3035 32.4455 26.8405L32.4455 26.8406C32.3203 29.3143 31.3359 31.4619 29.0952 33.0457L29.0951 33.0458C26.7872 34.6765 22.9862 35.8169 17.039 35.8169C11.0869 35.8169 7.27037 34.6963 4.94293 33.0852L4.94271 33.0851C2.68679 31.5217 1.69052 29.4026 1.55107 26.9582L24.9832 10.8936ZM24.9832 10.8936L24.6707 11.0145M24.9832 10.8936L24.6707 11.0145M24.6707 11.0145C19.8755 12.8688 14.1014 12.8688 9.30607 11.0164L9.1259 11.4829L8.75936 11.1428C6.76278 13.2948 4.90489 15.9353 3.57103 18.684L3.57099 18.684M24.6707 11.0145L3.57099 18.684M3.57099 18.684C2.17555 21.5609 1.40681 24.4461 1.55106 26.958L3.57099 18.684ZM25.6715 9.53797L25.4399 9.87661L25.7268 10.1699C27.8626 12.3534 29.8791 15.141 31.3234 18.0891C32.77 21.0418 33.6252 24.1198 33.4851 26.8934C33.3459 29.646 32.2288 32.1058 29.6967 33.8947C27.1426 35.6991 23.0973 36.8569 17.04 36.8569C10.9814 36.8569 6.92305 35.7198 4.35236 33.9396C1.80446 32.1752 0.669876 29.7462 0.513918 27.0171C0.356709 24.266 1.19619 21.1994 2.63691 18.2303C4.0752 15.2661 6.09561 12.4348 8.25312 10.1647L8.53079 9.87258L8.30423 9.53922L4.85344 4.46177C5.03912 4.35142 5.24627 4.23429 5.47381 4.11308L5.47381 4.11308L5.47553 4.11215C5.68577 3.9991 5.91244 3.88277 6.15558 3.76419L6.37128 3.65899C8.8465 2.47922 12.7713 1.14038 17.04 1.14038C21.3421 1.14038 25.2647 2.49997 27.71 3.68707L27.8475 3.75379C27.848 3.75406 27.8486 3.75433 27.8491 3.7546C28.3561 4.0054 28.7921 4.24498 29.1466 4.45807L25.6715 9.53797ZM10.3955 5.74033L10.396 5.74042C12.6303 6.15194 14.9151 6.22176 16.8945 5.64837L16.8953 5.64815C19.0625 5.01678 21.2668 4.52023 23.4954 4.16135L23.5601 3.18894C21.648 2.61323 19.4036 2.18036 17.039 2.18036C13.4377 2.18036 10.0925 3.18336 7.75756 4.1744L7.95292 4.63465L7.81034 5.1139C8.64138 5.36113 9.51135 5.57663 10.3955 5.74033Z" fill="#FAFAFA" stroke="#FAFAFA" />
                </svg>, number: '25k', text: 'Annual gross sale in our site'
        }
    ];



    return (
        <>

            <div className='flex justify-center '>
                <div className="mb-14 w-4/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white hover:bg-[#db4444] p-3 border-2 text-center flex flex-col items-center group">
                                <div className="text-4xl mb-4 bg-black group-hover:text-black group-hover:bg-white rounded-full p-3 border-8 border-[#c1c0c1]  group-hover:border-[#e67c7c]">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold mb-2 group-hover:text-white">{stat.number}</div>
                                <p className="text-gray-600 group-hover:text-white">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
