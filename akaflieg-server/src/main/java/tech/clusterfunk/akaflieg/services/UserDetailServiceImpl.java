package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.entities.UserEntity;
import tech.clusterfunk.akaflieg.repository.UserRepository;

import static java.util.Collections.emptyList;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    private UserRepository userRepo;

    @Autowired
    public UserDetailServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity applicationUser = userRepo.findByUsername(username);
        if (applicationUser != null) {
            return new User(applicationUser.getUsername(), applicationUser.getPassword(), emptyList());

        } else throw new UsernameNotFoundException(username);
    }
}
