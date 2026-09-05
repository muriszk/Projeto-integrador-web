package school.sptech.Integrador_backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import school.sptech.Integrador_backend.model.Musica;
import school.sptech.Integrador_backend.repository.MusicaRepository;

@RestController
@RequestMapping("/musica")
@CrossOrigin(origins = "http://localhost:5173")
public class MusicaController {

    private final MusicaRepository musicaRepository;

    public MusicaController(MusicaRepository musicaRepository) {
        this.musicaRepository = musicaRepository;
    }

    @GetMapping
    public List<Musica> listar() {
        return musicaRepository.findAll();
    }

    @PostMapping
    public Musica cadastrar(@RequestBody Musica musica) {
        return musicaRepository.save(musica);
    }
}
