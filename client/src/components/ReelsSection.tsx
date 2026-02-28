// import { motion } from "framer-motion";
// import { GraduationCap, Briefcase, Users, Headphones } from "lucide-react";

// const reels = [
//     {
//         title: "Expert",
//         subtitle: "Mentorship",
//         icon: GraduationCap,
//         videoUrl: "https://player.vimeo.com/video/1163315508?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
//         color: "from-amber-600 to-amber-900",
//     },
//     {
//         title: "Success",
//         subtitle: "Stories",
//         icon: Briefcase,
//         videoUrl: "https://player.vimeo.com/video/1163315603?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
//         color: "from-orange-600 to-orange-900",
//     },
//     {
//         title: "Interview",
//         subtitle: "Support",
//         icon: GraduationCap,
//         videoUrl: "https://player.vimeo.com/video/1163308141?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
//         color: "from-red-600 to-red-900",
//     },
//     {
//         title: "Placement",
//         subtitle: "Guidance",
//         icon: Briefcase,
//         videoUrl: "https://player.vimeo.com/video/1163308849?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0",
//         color: "from-maroon-600 to-maroon-900",
//     },
// ];

// export function ReelsSection() {
//     return (
//         <section className="py-24 relative overflow-hidden bg-[#2D0A0A]">
//             {/* Grid Pattern Overlay */}
//             <div className="absolute inset-0 opacity-10 pointer-events-none"
//                 style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

//             <div className="container-custom relative z-10">
//                 <div className="text-center mb-16">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
//                     >
//                         Experience Our <span className="text-[#FFD700]">Approach</span>
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                         className="text-red-100/70 text-lg max-w-2xl mx-auto"
//                     >
//                         See how we transform careers through dedicated mentorship and practical training.
//                     </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {reels.map((reel, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, scale: 0.9 }}
//                             whileInView={{ opacity: 1, scale: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: index * 0.1 }}
//                             className="group relative"
//                         >
//                             <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl relative bg-black">
//                                 {/* Vimeo Embed */}
//                                 <iframe
//                                     src={reel.videoUrl}
//                                     className="absolute inset-0 w-full h-full object-cover"
//                                     allow="autoplay; fullscreen; picture-in-picture"
//                                     title={reel.title}
//                                 />

//                                 {/* Glass Overlay for Text */}
//                                 <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
//                                     <div className="space-y-1">
//                                         <h3 className="text-3xl font-black text-white uppercase leading-none" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
//                                             {reel.title}
//                                         </h3>
//                                         <p className="text-[#FFD700] text-lg font-bold uppercase tracking-wider" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
//                                             {reel.subtitle}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 {/* Floating Icon/Logo area like in video */}
//                                 <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center overflow-hidden z-20 shadow-lg">
//                                     <img src="/logo.jpg" alt="Grace Logo" className="w-full h-full object-cover scale-110" />
//                                 </div>
//                             </div>

//                             {/* Decorative Glow */}
//                             <div className="absolute -inset-4 bg-red-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
