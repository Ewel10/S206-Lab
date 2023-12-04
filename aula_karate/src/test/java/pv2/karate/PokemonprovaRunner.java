package pv2.karate;

import com.intuit.karate.junit5.Karate;

class PokemonprovaRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("pokemonprova").relativeTo(getClass());
    }    

}