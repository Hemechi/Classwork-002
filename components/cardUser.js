const imagePlaceHolder = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png';
export const renderUser = (user)=>{
    return `
<div class="flow-root">
    <div class="py-3 sm:py-4">
    <div class="flex items-center">
        <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="${user?.image || imagePlaceHolder}" alt="Neil image">
        </div>
        <div class="flex-1 min-w-0 ms-4">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                ${user?.username || "Unknown"}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                ${user?.email || "Unknown email"}
            </p>
        </div>
    </div>
    </div>
</div>
    `;
};