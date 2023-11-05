import { cn } from "@/lib/utils";
import Picture from "../picture/Picture";
import styles from './ColorWheelDocs.module.css'

interface ColorWheelDocsProps {
    className?: string
}

export default function ColorWheelDocs({ className }: ColorWheelDocsProps) {
    return (
        <div className={cn("min-h-screen w-full p-[4rem] group", styles.container ,className)}>
            <Picture src={'/roda_warna.jpg'} height="h-[15rem]" aspectRasio="aspect-[3.5/3]" className={cn("w-full mb-3 rotate-12 group-hover:rotate-0 transition")} />
            <p>
                Lingkaran berwarna adalah representasi grafis yang mencoba mengatur warna sesuai dengan nada suara masing-masing.

                Secara khusus, itu mengatur mereka dari enam warna (ungu, merah, kuning, hijau, biru sian dan biru tua) yang tercermin dalam dekomposisi cahaya sehubungan dengan spektrum matahari.

                Secara total, hingga 24 alternatif warna dapat dilihat dalam lingkaran.

                Mungkin ada lingkaran warna yang membedakan nuansa yang berbeda: Lingkaran 3, 6, 12 dan 24 warna.

                Untuk apa roda warna digunakan?

                Tujuan utama dari alat dasar untuk desainer ini adalah membantu pengambilan keputusan untuk membuat palet warna selaras.

                Sangat dihargai untuk mengeksplorasi dan menerapkan semua kombinasi warna yang ada.

                Ini adalah alat mendasar bagi semua orang yang bekerja di bidang desain dan disiplin artistik dengan peran warna yang menonjol seperti lukisan.
            </p>
            <p>
                Ada berbagai harmoni warna yang membantu penggunaan roda warna dalam desain:
            </p>
            <ol>
                <li>Harmoni monokrom</li>
                <Picture src={'/twitter.png'} useBorder={false} aspectRasio="aspect-square" className={cn("w-full mb-3 rotate-12 group-hover:rotate-0 transition")} />
                <p>
                    Dalam jenis harmoni ini, warna dipilih dan skema dibuat dari rona, nada, dan coraknya.

                    Contoh yang baik untuk menggunakan harmoni kromatik adalah perusahaan Internet Twitter.
                </p>
                <li>Harmoni dengan warna analog</li>
                <Picture src={'/bp.png'} aspectRasio="aspect-video" className={cn("w-full mb-3 rotate-12 group-hover:rotate-0 transition")} />
                <p>
                    Memilih nuansa berbeda yang berdekatan juga merupakan strategi yang selalu berhasil dalam desain.

                    Coca Cola dan British Petrolium (BP) adalah dua merek yang menjadi contoh strategi ini.
                </p>
                <li>Harmoni dengan warna komplementer (atau sesuai kontras)</li>
                <Picture src={'/komplementer.jpeg'} height="h-[14rem]" aspectRasio="aspect-video" className={cn("w-full mb-3 rotate-12 group-hover:rotate-0 transition")} />
                <p>
                    Ini adalah harmoni antara warna yang berada dalam posisi berlawanan pada roda warna.

                    Perpaduan warna-warna tersebut terutama ditunjukkan ketika Anda ingin menarik perhatian dan memberikan dampak langsung dan kuat karena warna-warna tersebut saling menguatkan.
                </p>
                <li>Harmoni dengan empat warna</li>
                <Picture src={'/harmoni4warna.jpeg'} height="h-[14rem]" aspectRasio="aspect-video" className={cn("w-full mb-3 rotate-12 group-hover:rotate-0 transition")} />
                <p>
                    Jenis harmoni ini sulit dicapai, karena digunakan dua pasangan yang saling melengkapi.

                    Untuk melakukan kombinasi warna ini dengan benar, disarankan agar hanya satu warna yang dominan dalam komposisi.

                    Contoh keselarasan dengan empat warna ini adalah lukisan pelukis Kandinsky dari tahun 1908, "Jalan Murnau dengan Wanita".
                </p>
                <li>Harmoni dasar tersier</li>
                <p>
                    Hal ini terkait dengan komposisi warna dasar (primer dan sekunder) dan tersier.

                    Keselarasan ini dicapai dengan terlebih dahulu mencampurkan warna-warna dasar dan kemudian menambahkan warna-warna tersier.

                    Dalam keselarasan ini kuncinya adalah bahwa warna tersier yang dipilih untuk membuat campuran bukanlah hasil percampuran antara warna primer.
                </p>
                <li>Harmoni triadik atau harmoni jarak sama triad</li>
                <p>
                    Ini mengacu pada komposisi warna pada lingkaran kromatik yang membentuk segitiga sama sisi.

                    Komposisi warna-warna ini menghasilkan harmoni yang disebut equidistant-triad.

                    Lukisan Mark Rothko, yang dilukis pada tahun 1955, dan berjudul "Kuning, Merah, Biru Tanpa Judul" adalah contoh dari harmoni ini.
                </p>
            </ol>
            <p>
                Ada harmoni lain, tetapi yang kami sajikan dalam artikel ini adalah awal yang baik untuk mulai mengerjakan roda warna.

                Dalam artikel ini Anda telah menemukan mengapa dalam kreativitas tidak hanya inspirasi yang penting tetapi juga penguasaan teknik warna.
            </p>
        </div>
    )
}