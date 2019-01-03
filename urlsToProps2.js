let fstream = require("fstream");
let sitemap = {
    "bosch-ES": {
        "_local_landing_recetas_faciles_y_sanas_pag7": {},
        "_local_landing_recetas_faciles_y_sanas_pag8": {},
        "_local_landing_recetas_faciles_y_sanas_pag9": {},
        "app": {},
        "area-profesional-bosch": {},
        "aspiradoras-con-bolsa-zooo-proanimal": {},
        "aspiradoras-sin-bolsa-zooo-proanimal": {},
        "aspiradoras-sin-cable-zooo-proanimal": {},
        "aspiradoras-zooo-proanimal": {},
        "aspirador-escoba-athlet": {},
        "batidoras-silentmixx": {},
        "centro-de-planchado-sensixx-ds38": {},
        "centros-planchado-profesionales": {},
        "conoce-bosch": {
            "bosch-competence-center": {},
            "conoce-bosch": {}
        },
        "conoce-boschhttps:": {},
        "contacta": {},
        "contacto-cuidate-con-bosch": {},
        "cuidate-con-bosch": {},
        "donde-comprar-autocook": {},
        "electrodomesticos": {
            "cocina": {
                "campanas": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                },
                "cocinas-libre-instalacion": {
                    "02_free_standing_cookers_tab2_model_series": {}
                },
                "hornos": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                },
                "hornos-vapor": {
                    "preguntas-frecuentes-instalacion": {}
                },
                "microondas": {
                    "preguntas-frecuentes-instalacion": {}
                },
                "placas": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                }
            },
            "cuidado-del-cabello": {
                "01_hair_care_products_tab1_model_types": {}
            },
            "cuidado-personal": {
                "12_home_comfort_1": {}
            },
            "desayuno": {},
            "frigorificos-y-congeladores": {
                "americanos": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                },
                "combis": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                },
                "congeladores": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                },
                "una-puerta": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                }
            },
            "lavadoras-y-secadoras": {
                "lavadoras": {
                    "promocion": {},
                    "series": {}
                },
                "lavadoras-secadoras": {
                    "03_washer_dryers_tab2_features": {}
                },
                "secadoras": {
                    "series": {}
                }
            },
            "lavavajillas": {
                "integrables": {
                    "preguntas-frecuentes-instalacion": {},
                    "series": {}
                },
                "libre-instalacion": {
                    "series": {}
                },
                "promocion": {}
            },
            "robots-de-cocina": {}
        },
        "electrodomesticos-cuidate-con-bosch": {},
        "electrodomesticos-masterchef": {},
        "electrodomesticos-masterchef-junior": {},
        "electrodomesticos-para-preparar-zumos-detox": {},
        "electrodomesticos-top-chef": {},
        "error": {},
        "especiales": {
            "bolsas_aspiracion_g_all": {},
            "frigorificos-variostyle": {},
            "lavadoras-activeoxygen": {},
            "maestros-costura": {},
            "nueva-etiqueta-energetica-aspiradores": {},
            "placas-gas-flame-select": {},
            "pruebas-product-container": {},
            "tassimo-my-way": {}
        },
        "extrabosch": {},
        "formulario-error": {},
        "formulario-fin": {},
        "licuadora-vitajuice-mes4000": {},
        "modo-demo": {},
        "mybosch": {
            "extensiones-gratuitas-garantia": {}
        },
        "plancha-de-inyeccion-di90": {},
        "plancha-de-vapor-sensixx-da10": {},
        "plancha-de-vapor-sensixx-da30": {},
        "plancha-de-vapor-sensixx-da50": {},
        "plancha-de-vapor-sensixx-da70": {},
        "planchado-prohygienic": {},
        "planchas-easycomfort": {},
        "plancha-secador-pelo-keratin-advance": {},
        "plancha-secador-pelo-quattro-ion": {},
        "productos-extrabosch": {},
        "promociones": {
            "confianza-bosch": {},
            "lapatente": {},
            "loyalty": {},
            "loyalty-electrodomestico": {},
            "ofertas-tienda-online": {},
            "plan-renove": {},
            "promocion-finalizada": {},
            "promotoras-eci": {},
            "worten-lavado": {},
            "zeolitas": {
                "trucos-y-consejos": {},
                "zeolitas-que-son": {}
            }
        },
        "que-batidora-comprar": {},
        "recetas": {},
        "recetas-batidos-cuidate-con-bosch": {},
        "recetas-carne": {},
        "recetas-clasicas": {},
        "recetas-cocina-al-vapor": {},
        "recetas-cocina-en-familia": {},
        "recetas-desayunos": {},
        "recetas-entrantes-sopas-estofados": {},
        "recetas-faciles": {},
        "recetas-faciles-y-sanas": {},
        "recetas-ocasiones-especiales": {},
        "recetas-para-celiacos": {},
        "recetas-pescados": {},
        "recetas-postres-tartas": {},
        "recetas-vegetarianas": {},
        "recetas-verduras-guarniciones": {},
        "recetas-zumos-cuidate-con-bosch": {},
        "registra": {},
        "robot-de-cocina-autocook": {},
        "robot-de-cocina-mum-5": {},
        "secadores-de-pelo-prosalon": {},
        "secador-y-plancha-de-pelo-classicoiffeur": {},
        "secador-y-plancha-de-pelo-style-to-go": {},
        "servicio-oficial": {
            "aviso-seguridad": {},
            "consejos-limpieza-horno": {},
            "contacto": {
                "baja": {},
                "baja-realizada": {},
                "contact_form_mda_repair": {},
                "contact_form_sda_repair": {},
                "error-baja": {},
                "error-formulario-contacto": {},
                "error-suscripcion": {},
                "formulario-desmontaje": {}
            },
            "garantias-y-asistencia": {
                "aspiradores": {},
                "ayuda-cafeteras": {},
                "comida-al-vapor": {},
                "como-usar-el-horno-de-vapor": {},
                "mejor-cafe-para-cafeteras-automaticas": {},
                "preguntas-frecuentes-hornos-vapor": {},
                "problemas-con-la-cafetera": {},
                "tienda-aspiradores": {},
                "tienda-batidoras": {},
                "tienda-cafeteras": {},
                "tienda-frigorificos-y-congeladores": {},
                "tienda-lavadoras": {},
                "tienda-lavavajillas": {},
                "tienda-secadoras": {}
            },
            "limpieza-mantenimiento-y-repuestos": {
                "": {}
            },
            "servicio-reparaciones": {
                "contacto": {},
                "servicio-de-reparaciones-registro-de-orden": {}
            },
            "solicitar-cita-online-sem": {}
        },
        "supportdetail": {
            "product": {
                "MSM67140": {
                    "01": {}
                },
                "WTG86209EE": {
                    "03": {}
                }
            }
        },
        "suscripcion": {
            "error": {},
            "realizada": {}
        },
        "terminos-y-condiciones": {
            "aviso-legal": {
                "aviso-legal": {},
                "politica-de-privacidad": {}
            }
        },
        "tienda": {
            "compra-aspirador-sin-cable": {},
            "compra-campana-recomendada": {},
            "compra-centro-planachado": {},
            "compra-electrodomesticos-mejor-servicio": {},
            "compra-frigorifico-recomendado": {},
            "compra-horno-recomendado": {},
            "compra-lavadora-dosificaciona-automatica-detergente-recomendada": {},
            "compra-lavadora-recomendada": {},
            "compra-lavavajillas-recomendado": {},
            "compra-microondas-recomendado": {},
            "compra-placa-recomendada": {},
            "compra-robot-cocina": {},
            "comprar-vitroceramica-o-induccion": {},
            "compra-secadora-recomendada": {},
            "condiciones": {},
            "envolver-para-regalo": {},
            "informacion-de-envio": {},
            "metodos-de-pago": {},
            "politica-devoluciones-tienda": {},
            "por-que-comprar-en-bosch": {},
            "promociones-tienda": {},
            "que-aspiradora-comprar": {},
            "que-frigorifico-comprar": {},
            "que-lavadora-comprar": {},
            "servicio-a-domicilio-exclusivo": {},
            "servicio-premium": {},
            "terminos-y-condiciones": {},
            "tienda-online-preguntas-frecuentes": {}
        },
        "tienda-oficial-extrabosch": {},
        "videogaleria": {
            "activar-seguro-ninos": {},
            "cambiar-bolsa-aspirador": {},
            "cambiar-bombilla-horno": {},
            "como-limpiar-la-placa-vitroceramica": {},
            "desbloquear-bomba-desague-lavavajillas": {},
            "desbloquear-bomba-lavadora": {},
            "descalcificar-lavadora": {},
            "limpiar-brazos-giratorios-lavavajillas": {},
            "limpiar-el-horno": {},
            "limpiar-filtro-lavavajillas": {},
            "limpiar-filtro-protector-secadora-condensacion": {},
            "limpiar-filtros-aspirador-sin-bolsa": {},
            "limpiar-filtro-secadora-bomba-calor": {},
            "limpiar-filtro-secadora-condensacion": {},
            "limpiar-lavavajillas": {},
            "limpiar-puerta-horno": {},
            "limpiar-superficie-acero-inoxidable": {},
            "no-entra-agua-lavadora": {},
            "recipientes-aptos-induccion": {},
            "usar-liquido-limpiador-lavavajillas": {},
            "vaciar-deposito-condensacion-secadora": {}
        }
    }
};

function writeResultsToFile(text, name) {
    let writeStream = fstream.Writer({
        path: `./${name}`
    });
    writeStream.write(text);
}

//filter out anything on the second level without any children

Object.keys(sitemap["bosch-ES"]).forEach(ele => {

});





let propList = {};
let myString = "";
function recurThing(prop,level,path) {
    let nextLevel = ++level;
    Object.keys(prop).forEach(key => {
        if (Object.keys(prop[key]).length) {
            myString += `${"\t".repeat(level)}${key}${"\t".repeat(8-level+1)}${`${path}/${key}`}\n`; 
            recurThing(prop[key],nextLevel,`${path}/${key}`);
        } else {
            myString += `${"\t".repeat(level)}${key}${"\t".repeat(8-level)}${key}\t${`${path}/${key}`}\n`;       
        }
    })
}

recurThing(sitemap,0,"");

writeResultsToFile(myString,"testProps.txt");