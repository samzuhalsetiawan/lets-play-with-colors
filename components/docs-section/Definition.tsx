import { cn } from "@/lib/utils"
import styles from './Definition.module.css'
import Image from "next/image"
import Picture from "../picture/Picture"

interface DefinitionProps {
    className?: string
}

export default function Definition({ className = "" }: DefinitionProps) {
    return (
        <div className={cn("min-h-screen w-full p-[4rem] group", styles.container ,className)}>
            <Picture src={'/pencil_color.jpg'} className={cn("w-full mb-3 rotate-12 group-hover:rotate-0 transition")} />
            <p>
                Warna adalah spektrum tertentu yang terdapat di dalam suatu cahaya sempurna (berwarna putih). Identitas suatu warna ditentukan panjang gelombang cahaya tersebut. Sebagai contoh warna biru memiliki panjang gelombang 460 nanometer.
            </p>
            <p>
                Panjang gelombang warna yang masih bisa ditangkap mata manusia berkisar antara 380-780 nanometer.
            </p>
            <p>
                Dalam peralatan optis, warna bisa pula berarti interpretasi otak terhadap campuran tiga warna primer cahaya: merah, hijau, biru yang digabungkan dalam komposisi tertentu. Misalnya pencampuran 100% merah, 0% hijau, dan 100% biru akan menghasilkan interpretasi warna magenta.
            </p>
            <p>
                Dalam seni rupa, warna bisa berarti pantulan tertentu dari cahaya yang dipengaruhi oleh pigmen yang terdapat di permukaan benda. Misalnya pencampuran pigmen magenta dan cyan dengan proporsi tepat dan disinari cahaya putih sempurna akan menghasilkan sensasi mirip warna merah.
            </p>
            <p>
                Setiap warna mampu memberikan kesan dan identitas tertentu sesuai kondisi sosial pengamatnya. Misalnya warna putih akan memberi kesan suci dan dingin di daerah Barat karena berasosiasi dengan salju. Sementara di kebanyakan negara Timur warna putih memberi kesan kematian dan sangat menakutkan karena berasosiasi dengan kain kafan (meskipun secara teoretis sebenarnya putih bukanlah warna).
            </p>
            <p>
                Di dalam ilmu warna, hitam dianggap sebagai ketidakhadiran seluruh jenis gelombang warna. Sementara putih dianggap sebagai representasi kehadiran seluruh gelombang warna dengan proporsi seimbang. Secara ilmiah, keduanya bukanlah warna, meskipun bisa dihadirkan dalam bentuk pigmen. 
            </p>
            <p>
                Warna dapat dikelompokkan menjadi 4 jenis, yaitu:
            </p>
            <ol>
                <li>Warna netral, merupakan warna-warna yang tidak lagi memiliki kemurnian warna dan tidak lagi termasuk ke dalam jenis warna primer maupun warna sekunder. Warna netral dihasilkan melalu pencampuran tiga komponen warna tetapi dengan komposisi yang tidak tepat sama.</li>
                <li>Warna kontras, merupakan warna yang dihasilkan sebagai perpotongan titik tengah segitiga warna sehingga menghasilkan kesan warna yang berlawanan satu dengan lainnya. Komposisi warna pada warna kontras terdiri atas warna primer dan warna sekunder, tetapi memungkinkan memunculkan kontras hanya dengan mengolah nilai atau kemurnian warna. Merah-hijau, kuning-ungu dan biru-jingga merupakan contoh dari warna kontras.</li>
                <li>Warna panas, merupakan kelompok warna yang dihasilkan pada rentang setengah lingkaran di dalam lingkaran warna. Batas variasi warnanya mulai dari merah hingga kuning. Warna panas dijadikan antara lain sebagai simbol kegembiraan, semangat dan kemarahan. Kesan yang ditimbulkan oleh warna panas adalah jarak yang dekat. Namun, radiasi panas yang dihasilkan oleh benda dengan warna panas nilainya kecil.</li>
                <li>Warna dingin, merupakan kelompok warna dalam rentang setengah lingkaran di dalam lingkaran warna. Batas variasi warnanya mulai dari hijau hingga ungu. Warna dingin dijadikan antara lain sebagai kelembutan, kesejukan, dan kenyamanan. Kesan yang ditimbulkan oleh warna dingin adalah jarak yang jauh. Namun, radiasi panas yang dihasilkan oleh benda dengan warna dingin nilainya besar.</li>
            </ol>
        </div>
    )
}