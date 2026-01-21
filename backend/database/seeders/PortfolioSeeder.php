<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Profile
        \App\Models\Profile::truncate();
        \App\Models\Profile::create([
            'name' => "Hasan Ahmed Jobayer",
            'title' => "Full Stack WordPress & WooCommerce || Shopify || Webflow Developer",
            'tagline' => "Architecting sophisticated, scalable, and high-performance web solutions.",
            'phone' => "+8801748447652",
            'email' => "hasanahmedjobayer@gmail.com",
            'location' => "Chattogram, Bangladesh",
            'whatsapp' => "8801748447652",
            'resume_url' => "/resume.pdf",
            'formspree_url' => "https://formspree.io/f/mnneodez",
            'about' => "As a solutions architect with over a decade of experience, I seek to leverage my deep expertise in full-stack engineering to lead high-performing teams. My objective is to architect and implement complex, data-driven web solutions that ensure optimal performance, robust security, and seamless integration.",
            'linkedin_url' => "https://www.linkedin.com/in/engrhasanjobayer/",
            'facebook_url' => "https://www.facebook.com/engr.hjobayer/"
        ]);

        // Skills
        \App\Models\Skill::truncate();
        $skills = [
            ['name' => "WordPress / WooCommerce", 'level' => 99, 'category' => "cms"],
            ['name' => "PHP 8.x", 'level' => 95, 'category' => "backend"],
            ['name' => "JavaScript / React", 'level' => 90, 'category' => "frontend"],
            ['name' => "HTML5 / CSS3 / Tailwind / Bootstrap", 'level' => 95, 'category' => "frontend"],
            ['name' => "Shopify / Liquid", 'level' => 85, 'category' => "cms"],
            ['name' => "Webflow", 'level' => 85, 'category' => "cms"],
            ['name' => "MySQL", 'level' => 90, 'category' => "backend"],
            ['name' => "Figma to Code", 'level' => 95, 'category' => "tools"],
        ];
        foreach ($skills as $skill) {
            \App\Models\Skill::create($skill);
        }

        // Project
        \App\Models\Project::truncate();
        $projects = [
            [
                'title' => "Right Path Benefits",
                'category' => "Insurance",
                'description' => "Comprehensive employee benefits and insurance solutions platform tailored for businesses.",
                'image_url' => "https://picsum.photos/seed/rightpath/800/600",
                'link' => "https://rightpathbenefits.com",
                'sort_order' => 1
            ],
            [
                'title' => "T2 Insurance Solutions",
                'category' => "Insurance",
                'description' => "Customized insurance strategies providing robust coverage for diverse business needs.",
                'image_url' => "https://picsum.photos/seed/t2insure/800/600",
                'link' => "https://t2insurancesolutions.com",
                'sort_order' => 2
            ],
            [
                'title' => "Northstead",
                'category' => "Corporate",
                'description' => "Professional corporate presence focusing on strategic business growth and management.",
                'image_url' => "https://picsum.photos/seed/northstead/800/600",
                'link' => "https://northstead.com",
                'sort_order' => 3
            ],
            [
                'title' => "Berlin Insurance Group",
                'category' => "Insurance",
                'description' => "Dedicated risk management and insurance services portal for personal and commercial lines.",
                'image_url' => "https://picsum.photos/seed/berlin/800/600",
                'link' => "https://berlininsurancegroup.com",
                'sort_order' => 4
            ],
            [
                'title' => "Landmark Wealth Strategies",
                'category' => "Finance",
                'description' => "Financial planning website offering wealth management and strategic investment advice.",
                'image_url' => "https://picsum.photos/seed/landmark/800/600",
                'link' => "https://landmarkws.com",
                'sort_order' => 5
            ],
            [
                'title' => "High Ticket Barbers",
                'category' => "Services",
                'description' => "Premium booking, portfolio, and coaching site for high-end barbering professionals.",
                'image_url' => "https://picsum.photos/seed/barber/800/600",
                'link' => "https://highticketbarbers.com",
                'sort_order' => 6
            ],
            [
                'title' => "Wholistic Body Healthcare",
                'category' => "Health",
                'description' => "Integrative wellness center website featuring service details and appointment scheduling.",
                'image_url' => "https://picsum.photos/seed/health/800/600",
                'link' => "https://wholisticbodyhealthcare.com.au",
                'sort_order' => 7
            ],
            [
                'title' => "Holistic Yoga Studio",
                'category' => "Health",
                'description' => "Serene digital space for a yoga studio, including class schedules and retreat information.",
                'image_url' => "https://picsum.photos/seed/yoga/800/600",
                'link' => "https://holisticyogastudio.com",
                'sort_order' => 8
            ],
            [
                'title' => "MK Legal Group",
                'category' => "Legal",
                'description' => "Professional law firm website showcasing legal services, expertise, and client resources.",
                'image_url' => "https://picsum.photos/seed/legal/800/600",
                'link' => "https://mklegalgroup.com.au",
                'sort_order' => 9
            ],
            [
                'title' => "LOAV Tuitions",
                'category' => "Education",
                'description' => "Educational platform offering tuition services, learning resources, and student support.",
                'image_url' => "https://picsum.photos/seed/loav/800/600",
                'link' => "https://loavtuitions.com",
                'sort_order' => 10
            ]
        ];
        foreach ($projects as $project) {
            \App\Models\Project::create($project);
        }

        // Experiences
        \App\Models\Experience::truncate();
        $experiences = [
            [
                'role' => "Senior WordPress & WooCommerce Developer",
                'company' => "Sariya IT",
                'period' => "2022 – Present",
                'location' => "Bangladesh",
                'description' => [
                    "Develop websites with popular CMS like WordPress (ACF, Elementor, Gutenberg) and HubSpot.",
                    "Confer with management to prioritize needs and resolve conflicts.",
                    "Design and implement website security measures.",
                    "Optimize pages for speed and SEO."
                ]
            ],
            [
                'role' => "Senior Web Developer",
                'company' => "Loud Days",
                'period' => "2022 – 2024",
                'location' => "Melbourne, Australia (Remote)",
                'description' => [
                    "Developed websites utilizing WordPress, Shopify, and WooCommerce.",
                    "Analyzed user needs to determine technical requirements.",
                    "Integrated complex payment gateways and performance optimization.",
                    "Mentored junior developers and conducted code reviews."
                ]
            ],
            [
                'role' => "Project Manager & Team Leader",
                'company' => "Digital People Bangladesh",
                'period' => "2019 – 2022",
                'location' => "Dhaka, Bangladesh",
                'description' => [
                    "Led development for platforms including Magento, Shopify, and WordPress.",
                    "Translated business requirements into technical specifications.",
                    "Ensured code validity, structure, and industry standard compliance.",
                    "Managed ongoing website revisions and bug testing."
                ]
            ]
        ];
        foreach ($experiences as $experience) {
            \App\Models\Experience::create($experience);
        }
    }
}
