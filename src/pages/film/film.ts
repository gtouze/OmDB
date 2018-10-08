import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";



@IonicPage()
@Component({
  selector: "page-film",
  templateUrl: "film.html"
})
export class filmPage {
  public film = [
    {
      name: "Alad'2",
      times : "172",
      date : "3 octobre 2018",
      synopsie : "Après avoir libéré Bagdad de l’emprise de son terrible Vizir, Aladin s’ennuie au palais et ne s’est toujours pas décidé à demander en mariage la princesse. Mais un terrible dictateur, Shah Zaman, s’invite au Palais et annonce qu’il est venu prendre la ville et épouser la Princesse.",
    },
    {
      name: "Première année",
      times : " 1h 32min",
      date : "12 septembre 2018",
      synopsie : "Antoine entame sa première année de médecine pour la troisième fois. Benjamin arrive directement du lycée, mais il réalise rapidement que cette année ne sera pas une promenade de santé. Dans un environnement compétitif violent, avec des journées de cours ardues et des nuits dédiées aux révisions plutôt qu'à la fête... ",
    },
    {
      name: "Les Frères Sisters",
      times : " 1h 57min",
      date : "19 septembre 2018",
      synopsie : "Charlie et Eli Sisters évoluent dans un monde sauvage et hostile, ils ont du sang sur les mains : celui de criminels, celui d'innocents... Ils n'éprouvent aucun état d'âme à tuer. C'est leur métier. Charlie, le cadet, est né pour ça. Eli, lui, ne rêve que d'une vie normale. Ils sont engagés par le Commodore pour rechercher et tuer un homme. ",
    },
    {
      name: "Photo De Famille",
      times : " 1h 38min",
      date : "5 septembre 2018",
      synopsie : "Gabrielle, Elsa et Mao sont frères et sœurs, mais ne se côtoient pas. Surtout pas. La première est « statue » pour touristes, au grand dam de son fils ado. Elsa, elle, est en colère contre la terre entière et désespère de tomber enceinte. Et Mao, game designer de génie chroniquement dépressif, noie sa mélancolie dans l’alcool et la psychanalyse.",
    },
    {
      name: "La Prophétie de l'horloge",
      times : " 1h 46min",
      date : "26 septembre 2018",
      synopsie : "Lewis, 10 ans, lorsqu’il part vivre chez son oncle dans une vieille demeure dont les murs résonnent d’un mystérieux tic-tac. Mais lorsque Lewis réveille les morts accidentellement dans cette ville, en apparence tranquille, c’est tout un monde secret de mages et de sorcières qui vient la secouer.",
    },
    {
      name: "Hôtel Transylvanie 3 : Des vacances monstrueuses",
      times : "1h 37min",
      date : "25 juillet 2018",
      synopsie : "Notre famille de monstres préférée embarque pour une croisière de rêve afin que Drac puisse enfin souffler un peu et savourer des vacances au lieu de s’occuper de tout le monde à l’hôtel. Mais la mystérieuse Ericka, la capitaine humaine du navire, cache un secret qui les menace tous… ",
    }
];

}
 


