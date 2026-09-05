package school.sptech.Integrador_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import school.sptech.Integrador_backend.model.Musica;

public interface MusicaRepository extends JpaRepository<Musica, Long> {
}
