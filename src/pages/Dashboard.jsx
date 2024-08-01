import React from 'react';
import thumb from '../assets/thumb.jpg';
const Dashboard = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full h-20 grid grid-cols-2">
                <div className="w-full h-full flex items-center text-2xl font-semibold">Channel dashboard</div>
                <div className="w-full h-full flex items-center justify-end">
                    <div className="w-48 h-full grid grid-cols-2">
                        <div className="w-full h-full flex items-center justify-end">
                            <div className="rounded-full w-12 h-12 bg-[#282828] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg></div>

                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="rounded-full w-12 h-12 bg-[#282828] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>
</div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-screen grid grid-cols-3 gap-4">
                <div className="w-full h-[550px] bg-[#282828] border-solid border border-neutral-700 rounded-md grid grid-rows-9 px-4 py-2">
                    <div className="w-full h-full text-xl flex items-center">Latest video performance</div>
                    <div className="w-full h-full row-span-3 shadow-black shadow-2xl">
                        <img src={thumb} className="w-full h-full" alt=""/>
                    </div>
                    <div className="w-full h-full grid grid-cols-2 border-b border-solid border-neutral-700">
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>30

                            </div>
                            <div className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
</svg>0


                            </div>
                            <div className="w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>1


                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full row-span-3 grid grid-rows-5 text-sm">
                        <div className="w-full h-full flex items-center text-gray-400">First 5 days 7 hours</div>
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="w-full h-full flex items-center col-span-2">Ranking by views</div>
                            <div className="w-full h-full flex items-center justify-end">2 of 4</div>
                        </div>
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="w-full h-full flex items-center col-span-2">Views</div>
                            <div className="w-full h-full flex items-center justify-end">30</div>
                        </div>
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="w-full h-full flex items-center col-span-2">Impressions click-through rate</div>
                            <div className="w-full h-full flex items-center justify-end">8.3%</div>
                        </div>
                        <div className="w-full h-full grid grid-cols-3">
                            <div className="w-full h-full flex items-center col-span-2">Average view duration</div>
                            <div className="w-full h-full flex items-center justify-end">2:54</div>
                        </div>
                    </div>
                    <div className="w-full h-full grid grid-rows-2">
                        <div className="w-full h-full flex items-center text-blue-500">GO TO VIDEO ANALYTICS</div>
                        <div className="w-full h-full flex items-center text-blue-500">SEE COMMENTS (0)</div>
                    </div>

                </div>
                <div className="w-full h-full bg-[#282828] border-solid border border-neutral-700 rounded-md"></div>
                <div className="w-full h-full bg-[#282828] border-solid border border-neutral-700 rounded-md"></div>
            </div>
        </div>
    );
};

export default Dashboard;