import Galeria from "@/components/serieMovie/Galeria";
import type {
    Media,
    ProductionCompany,
    ProductionCountry,
} from "@/types/types";

const DetallesProduccion = ({
    data,
}: {
    data: Media;
}) => {

    // Calcular ganancias
    const ganancias = data.revenue;

    // Calcular inversión
    const inversion = data.budget;

    return (
        <article className='md:max-w-5xl md:mx-auto flex flex-col gap-10'>
            <div>
                <h4 className='mb-2 font-semibold'>Compañías de Producción</h4>
                <ul className='text-xs flex flex-col gap-1'>
                    {data.production_companies.map(
                        (company: ProductionCompany) => (
                            <li key={company.id}>{company.name}</li>
                        )
                    )}
                </ul>
            </div>
            <div>
                <h4 className='mb-2 font-semibold'>Países de Producción</h4>
                <ul className='text-xs flex flex-col gap-1'>
                    {data.production_countries.map(
                        (country: ProductionCountry) => (
                            <li key={country.iso_3166_1}>{country.name}</li>
                        )
                    )}
                </ul>
            </div>
            {ganancias && inversion && (
                <>                
                    <div>
                        <h4 className='mb-2 font-semibold'>Ingresos Generados</h4>
                        <span className='text-xs'>{ganancias !== 0 ? `$${ganancias}` : 'No tenemos informacion por el momento'}</span>
                    </div>
                    <div>
                        <h4 className='mb-2 font-semibold'>Inversion</h4>
                        <span className='text-xs'>{inversion !== 0 ? `$${inversion
                        }` : 'No tenemos informacion por el momento'}</span>
                    </div>
                    {/* SECCION DE IMAGENES */}
                    <Galeria/>
                </>
            )}
        </article>
    );
};

export default DetallesProduccion;
