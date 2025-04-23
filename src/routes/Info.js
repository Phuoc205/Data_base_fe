import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';

function Introduction() {
    const teamMembers = [
        { name: "Tấn Phước", avatar: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/454400795_1673357359895287_5030951977164536258_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGLtBcsLle0j-bF1SurnHYtKTNvfiqY9k8pM29-Kpj2T1FhNL_ArIe-CNAgm6EWrdeIwY5haCA0m2CYddcuWYlk&_nc_ohc=O725qk-AhuwQ7kNvwE5euty&_nc_oc=AdmbPeV4MVQ9OFRdpn3u9EvhPeOCWAdPtcYFam62Ujjbt-MeGyxisoDzBzUrEOUgf-gWGE3TOVVPLS8_IYLVCtjA&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=51hTW-S7Ixle6Ka35sVeFQ&oh=00_AfHUWG-Oh8ZNMqzx6cjxIZ-o3jY4gkzatxt_EXxRT27MTw&oe=680EA0E2" },
        { name: "Minh Phúc", avatar: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/335314629_737633684479736_4227183952730827265_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFlFRMH-76rgERFXRz2xrEhkBJnbZWHkdmQEmdtlYeR2dkl5bBCNC52Q-0a7IQ7BjlLqC__QAAQm9DKgkUBGgDX&_nc_ohc=9FSSMCJot6oQ7kNvwG3dMVv&_nc_oc=Adl1AdQF-GDvGxhUSPIMobgVRMBT1CFjrYrEIAKFi3rDi0E4WwkP1v6hdiMyFibbTD7xIeWagq-1cyhzIfhxr7FF&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=UsoWThFzISh5lR1yhIFzYg&oh=00_AfFzrwjVMb0i3ESTSEI7oZiGjQMHEt1Q0zT_D-SscVJKbA&oe=680EA969" },
        { name: "Minh Phú", avatar: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/445419237_833161455382924_2526480701037389333_n.jpg?stp=c80.0.480.480a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHsxbmYYQsqkRgwtwHvvLyIvtpTOrOBbn6-2lM6s4Fufgwds_S1WJuXDOWk8j-fbGBC0NUw_MpHCSdtvEUFuiS2&_nc_ohc=j_zcOTyyQIkQ7kNvwGconfL&_nc_oc=AdnUuiQYz4T9BnQLDTLK4RLksUXt83OagbOJltlgWjCqchgnErYdC6vNAkO6rt9ErPLvZ8Wihi7cu4lYqzR48aR9&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=zDKxcbVeGnCbvU2v6rRXSQ&oh=00_AfH55EQhrki8oPzvRnVTKdaCUsNG_U3tTztsU_Z9N8zTgg&oe=680EB14B" },
        { name: "Huy Phát", avatar: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/491839991_1220266066352070_3000951294008341075_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG0byreu3Qfu_FaTGFC4x9SBvJxLF7zX5wG8nEsXvNfnPj0sMKLpK98_hZw7HrOKve_ui9RC_bN0tBDoS50N_LP&_nc_ohc=x-kqiRo3zskQ7kNvwFXoEAC&_nc_oc=AdmePCeqOUAUePSNv3o220Y6-tUIMaQHkEqhFMZ_c_osgUc9_5-Dz4Iz82GKF7fumWuvj486ZSu9eUbLGlMh03_h&_nc_zt=24&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=BVI8djxdKoPn7mm6G5O7vg&oh=00_AfGtpxt9xgF-BpQROtEuLz8u5dKQXff7YUFe2S5ek07lAw&oe=680E8C0A" },
    ];
    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />
            <main style={{ padding: '2rem', maxWidth: '1000px', margin: '1 auto' }}>
                <h2>Về chúng tôi</h2>
                <p>
                <strong>W.O.T Inovation</strong> là cửa hàng thiết bị điện tử chuyên cung cấp các sản phẩm công nghệ cao cấp như laptop, linh kiện máy tính, phụ kiện gaming, và nhiều hơn nữa.
                </p>
                <p>
                    Được thành lập bởi 4 sinh viên máy tính đam mê công nghệ tại trường Đại học Bách khoa - ĐHQG.HCM,
                    chúng tôi cam kết mang đến trải nghiệm mua sắm hiện đại, chất lượng và đáng tin cậy.
                </p>
                <h2 className="text-3xl font-bold text-center mb-10">Danh mục nổi bật</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Laptop mới nhất', icon: '💻' },
                            { title: 'Linh kiện PC', icon: '🧩' },
                            { title: 'Gaming Gear', icon: '🎮' },
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    <h2 className="text-3xl font-bold mb-6">Tại sao chọn W.O.T Inovation?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg">✅ Sản phẩm chính hãng</h4>
                            <p>Chúng tôi chỉ bán các sản phẩm đến từ thương hiệu uy tín, có bảo hành đầy đủ.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg">🛠️ Hỗ trợ kỹ thuật</h4>
                            <p>Đội ngũ kỹ thuật viên chuyên nghiệp luôn sẵn sàng tư vấn & hỗ trợ.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg">🚀 Đam mê đổi mới</h4>
                            <p>Khởi đầu từ đam mê công nghệ, chúng tôi không ngừng cải tiến và phát triển.</p>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-center mb-6">Team sáng lập</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {teamMembers.map((member, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <img
                            src={member.avatar}
                            alt={`${member.name} avatar`}
                            style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '0.5rem' }}
                        />
                         <p className="text-lg font-medium">{member.name}</p>
                            </div>
                    ))}
                </div>

                <p>
                    Cảm ơn bạn đã ghé thăm, và đừng ngần ngại liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi
                    hay góp ý nào!
                </p>
            </main>
            <Footer />
        </div>
    );
}

export default Introduction;
