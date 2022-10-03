package com.knf.dev.security.services;

import com.knf.dev.models.DetailsUser;
import com.knf.dev.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserDetailService {

    @Autowired
    UserDetailsRepository userDetailsRepository;

    public DetailsUser saveUser(DetailsUser user) {
        return userDetailsRepository.save(user);
    }

    public List<DetailsUser> getList() {
        return userDetailsRepository.findAll();
    }
}


/*
public DetailsUser saveUser(DetailsUser userd) {
		return userDetailsRepository.save(userd);
	}
 */