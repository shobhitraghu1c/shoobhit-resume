<script setup lang="ts">
const jobData = [
    {
        companyName: "Avrio Energy",
        startDate: "Jan 2020",
        endDate: "Dec 2023",
        summary: "Worked on developing scalable web applications using modern technologies.",
        techUsed: ["Vue.js", "TypeScript", "Node.js", "CSS"],
    },
    {
        companyName: "Avrio Energy",
        startDate: "Jan 2018",
        endDate: "Dec 2019",
        summary: "Contributed to various web development projects, focusing on front-end technologies.",
        techUsed: ["HTML", "CSS", "JavaScript"],
    },
]

</script>
<template>
    <div class="px-[12%] w-full h-full bg-[#f8f0e3]">
        <div class="flex flex-col md:flex-row justify-between bg-[#FFFFFF] w-full h-fit rounded-md pt-10 px-5 pb-10">
<div class="w-[50%] h-full flex flex-col gap-4">
    <div class="w-full h-full flex flex-col ">
        <h1 class="text-3xl font-bold text-[#b49286]">
        Hello,
    </h1>
    <h1 class="text-3xl font-bold text-[#b49286] ">
        I am Shobhit
    </h1>
    </div>
    <div class="text-[#4a4a4a] font-semibold text-lg">
    lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. 
    </div>
    <div>
        <button class="bg-[#c78283] text-[#ffffff] p-2 rounded-md ">My Portfolio</button>
    </div>
    <div class="flex flex-row  gap-4 items-center mt-10 text-[#4a4a4a] ">
        <div>
            Links:
        </div>
        <div class="flex flex-row  gap-4 items-center text-[#4a4a4a]">
            <span>Github</span>
            <span>LinkedIn</span>
        </div>
    </div>
</div>
<div class="w-[50%] flex flex-row justify-end">
img div
</div>
        </div>
        <div class="w-full h-full">
<div class="flex items-center justify-center p-12 text-4xl font-bold text-[#b49286]">
    <h1>Work Experience</h1>
</div>
<div class="flex flex-row p-2 gap-5">
    <div v-for=" job in jobData" class="" >
    <work-card
        :companyName="job.companyName"
        :startDate="job.startDate"
        :endDate="job.endDate"
        :summary="job.summary"
        :techUsed="job.techUsed"
/>
</div>
</div>




        </div>
    </div>
</template>

<style scoped>

</style>