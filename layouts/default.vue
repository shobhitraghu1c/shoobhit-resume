<script>
    export default {
        

    }
</script>
<template>
    <div class="bg-[#f8f0e3] h-screen w-screen">
        <!--header code-->
<div class="flex flex-row p-2 justify-between h-[64px] bg-[#744253] place-items-center font-bold sticky w-full top-0 z-50">
<div class="text-2xl text-[#ffffff]">
    SHOBHIT
</div>
<div class="flex flex-row gap-4">
<div class ="text-[#ffffff] text-lg hover:text-[#f8f0e3] rounded-lg p-2 cursor-pointer">
    Home
</div>
<div class="text-[#ffffff] text-lg hover:text-[#f8f0e3] rounded-lg p-2 cursor-pointer">
    About
</div>
<div class="text-[#ffffff] text-lg hover:text-[#f8f0e3] rounded-lg p-2 cursor-pointer">
    Projects
</div>
<div class="text-[#ffffff] text-lg hover:text-[#f8f0e3] rounded-lg p-2 cursor-pointer">
    contact
</div>
</div>
<div>
</div>
    </div>
       <!--header code-->
    <slot />
</div>
</template>
<style scoped>

</style>